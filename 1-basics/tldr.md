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
brew install node && brew install git && brew install gh && brew install --cask visual-studio-code && brew install --cask postman && brew install --cask mongodb-compass && brew tap mongodb/brew && brew install mongodb-community
```
## If you use Linux:
You probably know what you're doing, but:
<a href="https://nick3point5.github.io/hint/">Hint</a>




