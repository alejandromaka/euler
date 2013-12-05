project euler
==
<br/>
solving euler problems using ruby.
<ol>
    <li>
		<b>Multiples of 3 and 5</b><br/>
		If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.<br/>
		Find the sum of all the multiples of 3 or 5 below 1000.
	</li>
	</br>
	<li>
		<b>bonus: triangle (incomplete)</b>
		<br/>
		by starting at the top of the triangle and moving to adjacent numbers on the row below, the maximum total from top to bottom is 27.<br/><br/>
<pre>
        5
       9 6
      4 6 8
     0 7 1 5</pre>
		i.e. 5 + 9 + 6 + 7 = 27.<br/><br/>
		write a program in a language of your choice to find the maximum total from top to bottom in triangle.txt, a text file containing a triangle with 100 rows.
		<br/>
		this is my solution in ruby.
	</li>
	<br/>
	<li>
		<b>bonus: my knapsack ruby solutions</b>
		<ul>
			<li>
				<b>unbounded:</b>
				after seeing a few solutions online, i decided to make a cleaner version of them on ruby. this is an unbounded solution, which means that the items are theoretically limitless (infinite). <br/>
			</li>
			<li>
				<b>0,1:</b>very similar to the previous solution. but i remove each element from the weight and values array when calling the function.
			</li>
		</ul>
	</li>
</ol>