class Euler4
	def number_palindrome
		# not the nicest way of solving it. but works =/
		sol=[]
		(100..999).to_a.reverse.each do |x|
			(100..999).to_a.reverse.each do |y|
				result = (x*y).to_s
				if result == result.reverse
					sol << result.to_i
				end
			end
		end
		p sol.max
	end
end
obj = Euler4.new
obj.number_palindrome