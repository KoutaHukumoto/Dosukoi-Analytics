/**
 * 
 */

 document.addEventListener('DOMContentLoaded', function() {
	    // バトル開始ボタンのイベントリスナー
	    document.querySelector('.battle-controls .btn-primary').addEventListener('click', function() {
	        document.getElementById('battleMessage').style.display = 'block';
	        document.querySelector('.battle-controls').style.display = 'none';
	    });

	    // にげるボタンのイベントリスナー
	    document.querySelectorAll('.battle-option')[3].addEventListener('click', function() {
	        window.location.href = 'mypage.html';
	    });

	    // 攻撃ボタンのイベントリスナー
	    document.querySelectorAll('.battle-option')[0].addEventListener('click', function() {
	        battleRound();
	    });
	
	    // 必殺技ボタンのイベントリスナー
	    document.querySelectorAll('.battle-option')[2].addEventListener('click', function() {
	        specialAttack();
	    });

	    // 防御ボタンのイベントリスナー
	    document.querySelectorAll('.battle-option')[1].addEventListener('click', function() {
	        battledefence();
	    });
	    
		// 音楽ボタンのイベントリスナー
		document.getElementById('playMusicBtn').addEventListener('click', function() {
			const music = document.getElementById('backgroundMusic');
			if (music.paused) {
				music.play();
				this.textContent = "🎵 音楽を停止";
			} else {
				music.pause();
				this.textContent = "🎵 音楽を再生";
			}
		});
	});

	// バトル結果表示
	function displayBattleResult(message) {
	    const resultOverlay = document.createElement('div');
	    resultOverlay.classList.add('battle-result-overlay');
	    
	    resultOverlay.innerHTML = 
	        '<div class="result-message">' + message + '</div>' +
	        '<div class="result-buttons">' +
	        '<a href="mypage.html" class="btn btn-primary btn-lg result-back-button" role="button">マイページに戻る</a>' +
	        '<button class="btn btn-primary btn-lg" onclick="restartBattle()">再戦する</button>' +
	        '</div>';
	    
	    document.body.appendChild(resultOverlay);
	    disableAllButtons();
	}

	// すべてのボタンを無効にする
	function disableAllButtons() {
	    document.querySelectorAll('button, .battle-option').forEach(button => {
	        button.disabled = true;
	        button.style.pointerEvents = 'none';
	    });
	}

	// バトル機能
	function battleRound() {
	    const playerHPElement = document.querySelector('.character.pc .character-header meter');
	    const npcHPElement = document.querySelector('.character.npc .character-header meter');
	    const playerImgElement = document.querySelector('.character.pc .character-img');
	    const npcImgElement = document.querySelector('.character.npc .character-img');
	    const battleLog = document.getElementById('battleLog');
	    let playerHP = parseInt(playerHPElement.getAttribute('value'));
	    let npcHP = parseInt(npcHPElement.getAttribute('value'));
	    const playerAttack = 15; // プレイヤーの攻撃力
	    const npcAttack = 10; // 敵の攻撃力

	    // プレイヤーが攻撃する
	    if (playerHP > 0 && npcHP > 0) {
	        npcHP -= playerAttack;
	        const playerAttackLog = document.createElement('li');
	        battleLog.appendChild(playerAttackLog);
	        displayTextOneByOne(playerAttackLog, `あなたの攻撃！ スライムに ${playerAttack} のダメージ！`, function() {
	            npcImgElement.classList.add('shake');
	            setTimeout(function() {
	                npcImgElement.classList.remove('shake');
	                if (npcHP <= 0) {
	                    npcHP = 0;
	                    const winLog = document.createElement('li');
	                    battleLog.appendChild(winLog);
	                    displayTextOneByOne(winLog, 'スライムは倒れた！！！', function() {
	                        npcHPElement.setAttribute('value', npcHP);
	                        displayBattleResult('勝利！！');
	                    });
	                    return;
	                }
	                npcHPElement.setAttribute('value', npcHP);

	                // スライムが攻撃する
	                playerHP -= npcAttack;
	                const npcAttackLog = document.createElement('li');
	                battleLog.appendChild(npcAttackLog);
	                displayTextOneByOne(npcAttackLog, `スライムの攻撃！ あなたに ${npcAttack} のダメージ！`, function() {
	                    playerImgElement.classList.add('shake');
	                    setTimeout(function() {
	                        playerImgElement.classList.remove('shake');
	                        if (playerHP <= 0) {
	                            playerHP = 0;
	                            const loseLog = document.createElement('li');
	                            battleLog.appendChild(loseLog);
	                            displayTextOneByOne(loseLog, 'あなたは倒れた。。。', function() {
	                                playerHPElement.setAttribute('value', playerHP);
	                                displayBattleResult('敗北。。。');
	                            });
	                            return;
	                        }
	                        playerHPElement.setAttribute('value', playerHP);
	                    }, 500);
	                });
	            }, 500);
	        });
	    }
	}

	// 必殺技機能
	function specialAttack() {
	    const npcHPElement = document.querySelector('.character.npc .character-header meter');
	    const npcImgElement = document.querySelector('.character.npc .character-img');
	    const battleLog = document.getElementById('battleLog');
	    let npcHP = parseInt(npcHPElement.getAttribute('value'));
	    const playerAttack = 150; // 必殺技のダメージは通常攻撃の10倍

	    // ビームのアニメーション
	    var beam = document.createElement('div');
	    beam.id = 'beam';
	    document.body.appendChild(beam);

	    // ヒーロー画像の右端にビームの位置を設定
	    const heroImgElement = document.querySelector('.character.pc .character-img');
	    const heroRect = heroImgElement.getBoundingClientRect();
	    const heroRight = heroRect.right;
	    const heroTop = heroRect.top;

	    beam.style.left = heroRight + 'px';
	    beam.style.top = heroTop + (heroRect.height / 2 - 35) + 'px';

	    // ビームの満たアニメーション
	    anime({
	        targets: '#beam',
	        width: '10px',
	        opacity: [0, 1],
	        scaleX: [0, 1],
	        duration: 1200,
	        easing: 'easeInOutQuad',
	        complete: function() {
	            anime({
	                targets: '#beam',
	                width: ['100px', '100vw'],
	                duration: 800,
	                easing: 'easeOutExpo',
	                complete: function() {
	                    anime({
	                        targets: '#beam',
	                        scaleX: [1, 0],
	                        opacity: [1, 0],
	                        duration: 3000,
	                        easing: 'linear',
	                        complete: function() {
	                            beam.remove();
	                        }
	                    });
	                }
	            });

	            // ダメージ処理
	            npcHP -= playerAttack;
	            const specialAttackLog = document.createElement('li');
	            battleLog.appendChild(specialAttackLog);
	            displayTextOneByOne(specialAttackLog, `あなたの必殺技！ スライムに ${playerAttack} のダメージ！`, function() {
	                npcImgElement.classList.add('shake');
	                setTimeout(function() {
	                    npcImgElement.classList.remove('shake');
	                    if (npcHP <= 0) {
	                        npcHP = 0;
	                        const winLog = document.createElement('li');
	                        battleLog.appendChild(winLog);
	                        displayTextOneByOne(winLog, 'スライムは倒れた！！！', function() {
	                            npcHPElement.setAttribute('value', npcHP);
	                            displayBattleResult('勝利！！');
	                        });
	                        return;
	                    }
	                    npcHPElement.setAttribute('value', npcHP);
	                }, 500);
	            });
	        }
	    });
	}

	// 一文字ずつ表示する関数
	function displayTextOneByOne(element, text, callback) {
	    let index = 0;
	    function typeChar() {
	        if (index < text.length) {
	            element.textContent += text.charAt(index);
	            index++;
	            setTimeout(typeChar, 50);
	        } else if (callback) {
	            callback();
	        }
	    }
	    typeChar();
	}

	function battledefence() {
	    const playerHPElement = document.querySelector('.character.pc .character-header meter');
	    const npcHPElement = document.querySelector('.character.npc .character-header meter');
	    const battleLog = document.getElementById('battleLog');
	    let playerHP = parseInt(playerHPElement.getAttribute('value'));
	    const npcAttack = 10;

	    const defenceLog = document.createElement('li');
	    battleLog.appendChild(defenceLog);
	    displayTextOneByOne(defenceLog, `あなたは防御した。スライムの攻撃を受けたがダメージが減る。`, function() {
	        playerHP -= Math.floor(npcAttack / 2);
	        if (playerHP <= 0) {
	            playerHP = 0;
	            displayBattleResult('敗北。。。');
	        }
	        playerHPElement.setAttribute('value', playerHP);
	    });
	}