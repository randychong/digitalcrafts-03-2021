def chessboard():
    pattern = print("""
    " "#" "#" "#" "#
    #" "#" "#" "#" "
    """)
    return pattern

count = 0
while count < 4:
    chessboard()
    count += 1
