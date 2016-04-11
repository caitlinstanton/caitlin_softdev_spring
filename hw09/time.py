import time

def metaFunc(f):
    def meta(*args):
        temp = f(*args)
        # Changed to printing rather than returning because of recursive calls
        print ("Function: " + f.func_name +
               "\nArguments: " + str([arg for arg in args]) +
               "\nValue: " + str(temp))
        return temp
    return meta


def timeFunc(f):
    starting = time.time()

    def timer(*args):
        temp = f(*args)
        print "Time: " + str(time.time() - starting)
        return temp
    return timer


@timeFunc
@metaFunc
def fib(n):
    if n <= 2:
        return 1
    else:
        return fib(n - 1) + fib(n - 2)
 
print fib(5)
