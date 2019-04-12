class Triangle

	def bestPath(values)

		values.reverse_each do |i|
			allSolutions[i] = bestPath(values, lines-1) + values[i]
		end
	end

	def start
		#store in 2 arrays
		values = File.foreach("triangle2.txt").collect {|i| i}.map
		puts values
		# bestPath(values, lines)
	end
end

object = Triangle.new
object.start