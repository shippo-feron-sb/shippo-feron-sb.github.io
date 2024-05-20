HAS_CLEANUP=false
FIVE_DAYS_AGO=$(date +%s -d '5 days ago')
echo "Five days ago: ${FIVE_DAYS_AGO}"
for dir in ./*/
do
    DATEOFLAST=`git log -n 1 --pretty=format:%ct ${dir}`
    echo "Date of last commit: ${DATEOFLAST}"
    echo "Directory: ${dir}"
    if [ $DATEOFLAST -le $FIVE_DAYS_AGO ] && [ $dir != "./master/" ]
    then
        HAS_CLEANUP=true
        echo "Deleting ${dir}"
        rm -rf ${dir}
    fi
    echo "=========================================================="
done

if [ "$HAS_CLEANUP" = true ]
then
    git config --global user.email "feron-storybook@shippo.com"
    git config --global user.name "shippo-feron-sb"
    git add .
    git commit -m "Cleanup"
    git push origin main
fi
