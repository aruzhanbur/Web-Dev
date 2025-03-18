def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else 40 <= cigars <= 60

cigars = int(input("Enter the number of cigars: "))
is_weekend = input("Is it the weekend? (True/False): ").strip().lower() == "true"
print(cigar_party(cigars, is_weekend))
