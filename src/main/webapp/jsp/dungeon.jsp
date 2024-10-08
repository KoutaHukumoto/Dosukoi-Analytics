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

		<audio id="backgroundMusic">
			<source src="audio/Umbra.mp3" type="audio/mp3">
		</audio>


		<div class="container text-center">
			<div class="row">
				<div class="col-12">
					<h1 class="level-title">1階層</h1>
					<h2>VS</h2>
				</div>
			</div>
			
			<div class="pcname">${name}
			<meter max="100" low="20" high="80" optimum="90" value="100"></meter>
			</div>
			
			<div class="npcname">スライム
			<meter max="100" low="20" high="80" optimum="90" value="20"></meter>
			</div>		

			<div class="pc">
				<div class="pccharacter">
					<img src="画像/avater.jpg" alt="Hero" class="pccharacter-img">
					<div class="pcstats">
						<p>HP: ${hp}</p>
						<p>攻撃: ${attack}</p>
						<p>防御: ${defense}</p>
						<p>すばやさ: ${speed}</p>
						<p>装備品: 「${item}」</p>
						<p>「${itemEffect}」</p>
					</div>
				</div>
			</div>
			
			
			<div class="npc">

				<div class="npccharacter">
					<img src="画像/スライム.png" alt="Enemy" class="npccharacter-img">
					<div class="npcstats">
						<p>HP: 1</p>
						<p>攻撃: 1</p>
						<p>防御: 1</p>
						<p>すばやさ: 1</p>
						<p>装備品: 「経験値」</p>
						<p>「倒すと経験値を落とす」</p>
					</div>
				</div>
			</div>

			<div class="row mt-4">
				<div class="col-12">
					<button class="btn btn-primary btn-lg">バトル</button>
					<a href="mypage.html" class="btn btn-secondary btn-lg"
						role="button">もどる</a>
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
