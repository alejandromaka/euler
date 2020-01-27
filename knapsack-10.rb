
class Knapsack

	# in this solution we remove the values we've already added
	def knapsack(size, weight, value)
		# return if knapsack's size is 0 or when there's not enough space to keep adding items
		return 0 if size == 0 || weight.min > size

		# store all the solutions in a temp array
		allSolutions = []
		for i in 0..weight.size-1
			if weight[i] <= size
				allSolutions[i] = knapsack(size-weight[i], weight-[i], value-[i]) + value[i]
			else
				# assign the variable 0 so it can be added
				allSolutions[i] = 0
			end
		end
		return allSolutions.max
	end

	def start
		# ask for info
		begin
			puts "enter the size of the knapsack: "
			size = gets.to_i
			puts "enter all weights separated by a space: "
			weight = gets.split(" ").map(&:to_i)
			puts "now enter all values (respectively) separated by a space: "
			value = gets.split(" ").map(&:to_i)
		end while	((weight.size != value.size) || size <= 0)

		# for when im lazy and dont want to input values
		# size = 10
		# weight = [5,4,6,3]
		# value = [10,40,30,50]
		puts knapsack(size, weight, value)
	end

end

object = Knapsack.new
object.start
