def union(a,b):
    return a + [x for x in b if x not in a]

def intersect(a,b):
    return [x for x in b if x in a]

def set_diff(a,b):
    return [x for x in a if x not in b]

def symm_diff(a,b):
    symm_a = []
    [symm_a.append(x) for x in a if x not in symm_a]
    symm_b = []
    [symm_b.append(x) for x in b if x not in symm_b]
    result = []
    [result.append(x) for x in symm_a if x not in symm_b]
    [result.append(x) for x in symm_b if x not in symm_a if x not in result]
    return result

def cart_prod(a,b):
    coord = ()
    result = []
    print [(a[i],b[j]) for i in xrange(len(a)) for j in xrange(len(b))] 

##CLASS CODE

def cart_prod2(s1,s2):
    result = []
    for x in s1:
        hold = [(x,a) for a in s2]
        result += hold
    return result

def cart_prod3(a,b):
    return [(x,y) for x in a for y in b]

print cart_prod3([1,2,3],[2,3,4])
