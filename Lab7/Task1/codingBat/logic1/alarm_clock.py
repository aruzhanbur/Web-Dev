def alarm_clock(day, vacation):
    if vacation:
        return "10:00" if 1 <= day <= 5 else "off"
    else:
        return "7:00" if 1 <= day <= 5 else "10:00"

day = int(input("Enter the day (0=Sun, 1=Mon, ..., 6=Sat): "))
vacation = input("Are you on vacation? (True/False): ").strip().lower() == "true"
print(alarm_clock(day, vacation))
