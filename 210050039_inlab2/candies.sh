prev=0
curr=1
for((i=0;i<"$1";i++))
do
	echo -n "$prev" ""
	temp=$curr
	curr=$((curr+prev))
	prev=$temp

done
