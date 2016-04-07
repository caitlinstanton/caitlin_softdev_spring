def pt(n):
    triples = []
    for a in range (1,n):
        for b in range (1,n):
            for c in range (1,n):
                if (a*a + b*b == c*c):
                    triples.append([a,b,c])
    return triples

def pt2(n):
    return [(a,b,c) 
		for a in range(1,n) 
		for b in range(1,n) 
		for c in range(1,n) 
		if a*a + b*b == c*c]

print pt2(15)
