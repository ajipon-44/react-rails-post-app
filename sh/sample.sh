#!/bin/bash

read -p "バージョンを入力してください: " VERSION
echo "Hello!"

git checkout -b feature-$VERSION
git add .
git commit -m "Update manifest file to $VERSION"
git push origin feature-$VERSION
git checkout main
git branch -d feature-$VERSION
