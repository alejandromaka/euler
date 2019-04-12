class Euler2
	def even_fib
		fib = Enumerator.new do |y|
		  a = b = 1
		  loop do
		    y << a
		    a, b = b, a + b
		  end
		end
		result = fib.take_while {|i| i<4000000}.select {|x| x%2==0}.reduce(:+)
		puts result
	end
end
obj = Euler2.new
obj.even_fib