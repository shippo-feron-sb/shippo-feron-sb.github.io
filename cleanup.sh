for dir in ./*/
do
    DATEOFLAST=`git log -n 1 --pretty=format:%ct ${dir}`
    FIVE_DAYS_AGO=$(date +%s -d '5 days ago')
    if [[ $DATEOFLAST > $FIVE_DAYS_AGO && $dir != "./master/" ]]
    then
        echo "Deleting ${dir}"
        rm -rf ${dir}
    fi
done