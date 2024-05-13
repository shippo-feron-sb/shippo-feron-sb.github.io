HAS_CLEANUP=false
for dir in ./*/
do
    DATEOFLAST=`git log -n 1 --pretty=format:%ct ${dir}`
    FIVE_DAYS_AGO=$(date +%s -d '5 days ago')
    echo "Date of last commit: ${DATEOFLAST}"
    if [[ $DATEOFLAST < $FIVE_DAYS_AGO && $dir != "./master/" ]]
    then
        HAS_CLEANUP=true
        echo "Deleting ${dir}"
        rm -rf ${dir}
    fi
done

if [ "$HAS_CLEANUP" = true ]
then
    git add .
    git commit -m "Cleanup"
    git push origin main
fi