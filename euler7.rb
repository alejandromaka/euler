require 'prime'
class Euler7
	def find_prime
		result = Prime.first(10001).max
		p result
	end
end
obj = Euler7.new
obj.find_prime