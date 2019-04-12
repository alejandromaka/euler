require 'prime'
class Euler3
	def prime_factor
		# after finding prime_division i abandonded my old solution
		# n = 600851475143
		# result = (1..Math.sqrt(n)).select { |x| Prime.prime?(x) && n%x==0 }
		result = Prime.prime_division(600851475143).flatten.max
		p result
	end
end
obj = Euler3.new
obj.prime_factor