class Euler5
	def least_common_multiple
		result = (1..20).inject(1) { |memo, x| memo.lcm(x) }
		p result
	end
end
obj = Euler5.new
obj.least_common_multiple