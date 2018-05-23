# https://www.youtube.com/watch?v=rVPuzFYlfYE
# shortcuts
# ctrl + alt + l => format document
# shift + f10 => run
# shift + f9 => debug
# ctrl + shift + f10 => run current document
# ctrl + f8 => set breakpoint
# f7 => step into
# f8 => step over
# shift + f8 => step out
# shift + f6 => rename
print("GggTowersOfHanoi Starts")


def printMove(fr, to):
    print('move from ' + str(fr) + ' to ' + str(to))


def Towers(n, fr, to, spare):
    if n == 1:
        printMove(fr, to)
    else:
        Towers(n - 1, fr, spare, to)
        Towers(1, fr, to, spare)
        Towers(n - 1, spare, to, fr)


        # tests
        # Towers(1, 'f', 't', 'a')


Towers(2, 'initial', 'target', 'spare')
# Towers(3, 'initial', 'target', 'spare')
# Towers(5, 'initial', 'target', 'spare')
