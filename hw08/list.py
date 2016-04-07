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
    coord = tuple[(x,y) for x in a for y in b]
    print coord 

print cart_prod([1,2,3],[2,3,4])
