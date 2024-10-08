<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ゲーム風デザイン</title>
<link
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	rel="stylesheet">
<link rel="stylesheet" href="css/battle.css">
</head>
<body>
	<div class="bg-custom">

		<div class="music-control">
			<button id="playMusicBtn" class="btn btn-info">🎵 音楽を再生</button>
		</div>

		<!-- 音楽の音声ファイル -->
		<audio id="backgroundMusic">
			<source src="audio/Umbra.mp3" type="audio/mp3">
		</audio>


		<div class="container text-center">
			<!-- 階層表示 -->
			<div class="row">
				<div class="col-12">
					<h1 class="level-title">1階層</h1>
					<h2>VS</h2>
				</div>
			</div>

			<!-- キャラクター表示 -->
			<div class="row">
				<!-- プレイヤー -->
				<div class="col-md-6 text-center">
					<img src="画像/avater.jpg" alt="Hero" class="character-img">
					<div class="stats">
						<p>HP: ${hp}</p>
						<p>攻撃: ${attack}</p>
						<p>防御: ${defense}</p>
						<p>すばやさ: ${speed}</p>
						<p>装備品: 「${item}」</p>
						<p>「${itemEffect}」</p>
					</div>
				</div>

				<!-- 敵キャラクター -->
				<div class="col-md-6 text-center">
					<img src="画像/スライム.png" alt="Enemy" class="character-img">
					<div class="stats">
						<p>HP: 1</p>
						<!-- 敵のHP -->
						<p>攻撃: 1</p>
						<!-- 敵の攻撃 -->
						<p>防御: 1</p>
						<!-- 敵の防御 -->
						<p>すばやさ: 1</p>
						<!-- 敵のすばやさ -->
					</div>
				</div>
			</div>

			<!-- ボタン -->
			<div class="row mt-4">
				<div class="col-12">
					<button class="btn btn-primary btn-lg">バトル</button>
					<a href="mypage.html" class="btn btn-secondary btn-lg" role="button">もどる</a>
				</div>
			</div>
		</div>
	</div>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

	<script>
		const music = document.getElementById('backgroundMusic');
		const playMusicBtn = document.getElementById('playMusicBtn');
		let isPlaying = false;

		playMusicBtn.addEventListener('click', function() {
			if (!isPlaying) {
				music.play();
				playMusicBtn.textContent = "🎵 音楽を停止";
			} else {
				music.pause();
				playMusicBtn.textContent = "🎵 音楽を再生";
			}
			isPlaying = !isPlaying;
		});
	</script>
</body>
</html>
