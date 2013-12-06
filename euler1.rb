class Euler1
	def multiple_3_5
		result = (0..999).select { |n| n%3==0 || n%5==0 }.inject(:+)
		puts result
	end
end
obj = Euler1.new
obj.multiple_3_5