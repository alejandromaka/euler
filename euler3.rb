require 'prime'
class Euler3
	def prime_factor
		n = 600851475143
		result = (1..Math.sqrt(n)).select { |x| Prime.prime?(x) && n%x==0 }
		p result.max
	end
end
obj = Euler3.new
obj.prime_factor