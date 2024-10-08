<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>ダンジョンページ</title>
</head>
<body>
	<h1>ダンジョンへようこそ！</h1>

	<div>
		<p>名前: ${name}</p>
		<p>ID: ${id}</p>
		<p>HP: ${hp}</p>
		<p>攻撃: ${attack}</p>
		<p>防御: ${defense}</p>
		<p>すばやさ: ${speed}</p>
		<p>装備品: ${item} (${itemEffect})</p>
	</div>
</body>
</html>
