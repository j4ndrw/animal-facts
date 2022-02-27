set -xe

yarn create vite $1 --template react-ts && cd $1 && yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest && npx tailwindcss init -p && cd ..