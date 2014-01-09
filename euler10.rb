require 'prime'
class Euler10
	def self.prime_sum2m
		p Prime.each(2000000).reduce(:+)
	end
end
Euler10.prime_sum2m