"""
def inc(x):
    return x + 1

def dec(x):
    return x - 1

f = inc
print f(x)

flist = [inc, dec]

print flist[1](5)

#####

#a simple closure in Python
def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)

add3(10)
add5(10) 

#####

#a clunky approach to class type abstraction
def makeCounter():
    #private "instance" data
    #has to be a list due to weird python scoping rules
    count = [0]

    #public methods
    def inc():
        count[0] = count[0] + 1
    def dec():
        count[0] = count[0] - 1
    def reset():
        count[0] = 0
    def get():
        return count[0]

    #return a dictionary so we have access to all the methods
    return{'inc':inc,'dec':dec,'reset':reset,'get':get}


c1 = makeCounter()
c2 = makeCounter()

c1['inc']()
c1['inc']()
c1['inc']()
print c1['get']()

c2['inc']()
print c2['get']()

c1['reset']()
print c1['get']()


def getName():
    names = ['harry','bjork','parthanax','hamlet','alice','frodo']
    return random.choice(names)

def dble(f):
    name = f()
    return name + name
"""

#####

import random 

def doubler(f):
    def inner():
        name = f()
        return name + name
    return inner

@doubler
def getName():
    names = ['tom','sue','harry','lisa','sarah','horatio']
    return random.choice(names)

print getName()

"""
2nd eg will have demo return "hellohello" whenever we invoke it

equiv to:
getName = double(getName)

TAKEAWAY:
BAM!: can write fxns that transform fxns

A Python decorator is merely shorthand for calling awrapper-type function like
doubler

A Python decorator encapsulates a closure

A decorator allows to transparently wrap functionality
"""
