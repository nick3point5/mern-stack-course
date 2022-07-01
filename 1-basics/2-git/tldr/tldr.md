## If you are Windows, open PowerShell and run the following commands:
```ps
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

```ps
choco install mongodb-compass mongodb nodejs postman gh git vscode -y
```

## If you are Mac, open terminal and run the following commands:
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
```sh
brew install --cask visual-studio-code && brew install --cask postman && brew install --cask mongodb-compass && brew install mongodb-community && brew install node && brew install git && brew install gh
```
## If you use Linux:

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
	<body>
		<button id="hint-button">hint</button>
		<audio id="sound1" src="audio/sound1.mp3" preload="auto"></audio>
		<audio id="sound2" src="audio/sound2.mp3" preload="auto"></audio>
		<audio id="sound3" src="audio/sound3.mp3" preload="auto"></audio>
		<script>
			const soundArray = [1, 2, 3]

			function playAudio(num) {
				const origAudio = document.getElementById('sound' + num)
				const newAudio = origAudio.cloneNode()
				newAudio.play()
			}

			function press() {
				const num = soundArray.shift()
				if (soundArray.length === 0) {
					soundArray.push(1, 2, 3)
				}
				playAudio(num)
			}

			const button = document.getElementById('hint-button')
			button.addEventListener('click', press)
		</script>
	</body>
</html>
