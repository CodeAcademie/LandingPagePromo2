DIR=~/Documents/Promo2/Site/LandingPagePromo2/assets/img/photos
for FILE in $DIR/*
do
    echo "$FILE en cours"
    filename=$(basename "$FILE")
    convert $FILE -resize 400 $DIR/small/$filename
done
