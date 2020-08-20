from bs4 import BeautifulSoup
import re
counter = 0
dialogue_matcher = re.compile("^[a-zA-Z0-9]+: .+$")
parenthesis_picker = re.compile("\\([^()]*\\)")
name_remover = re.compile("^[a-zA-Z0-9]+: +")



def parse():
    counter = 0
    for x in range(0,133):
        with open(f"avatar{counter}") as f:
            data = f.read()
        soup = BeautifulSoup(data, features = "lxml")
        text = soup.get_text()
        with open(f"avatar{counter}","w") as f:
            f.write(text)
        counter += 1

def lines():
    with open(f"avatar{counter}","w") as f:
        f.write(text)






    with open(f"transcripts/avatar{1}") as f:
        data = f.read()
    data = data.split("\n")
    counter = 0
    for y in data:
        if y == "":
            break
        counter += 1
    data2 = []
    data3 = []
    data4 = []
    for x in data[counter:]:
        if dialogue_matcher.match(x):
            data2.append(x)
    for thing in data2:
        data3.append(parenthesis_picker.sub("",thing))
    for thing in data3:
        data4.append(name_remover.sub("",thing))
    print (data4)






lines()
