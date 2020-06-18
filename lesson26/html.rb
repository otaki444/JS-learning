def Fizz_Buzz(num)
    if num % 3 == 0&&num % 5 == 0
        puts "Fizz_Buzz"
    elsif num % 3 == 0
        puts "Fizz"
    elsif num % 5 == 0
        puts "Buzz"
    else
        puts num
    end
end

number = 1..100
number.each do |num|
    puts Fizz_Buzz(num)
end