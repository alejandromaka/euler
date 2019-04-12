class Euler6
	def sum_square
		result = (1..100).reduce(:+)**2 - (1..100).inject {|mem, x| mem+x**2 }
		p result
	end
end
obj = Euler6.new
obj.sum_square