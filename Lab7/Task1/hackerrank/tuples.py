def compute_tuple_hash():
    n = int(input().strip()) 
    elements = tuple(map(int, input().split())) 
    
    print(hash(elements))

compute_tuple_hash()
