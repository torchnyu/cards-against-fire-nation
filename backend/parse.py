from bs4 import BeautifulSoup
import re
import nltk



counter = 0
dialogue_matcher = re.compile("^[a-zA-Z0-9]+: .+$")
parenthesis_picker = re.compile("\\([^()]*\\)")
name_remover = re.compile("^[a-zA-Z0-9]+: +")


def parse():
    counter = 0
    for x in range(0, 133):
        with open(f"avatar{counter}") as f:
            data = f.read()
        soup = BeautifulSoup(data, features="lxml")
        text = soup.get_text()

        with open(f"avatar{counter}", "w") as f:
            f.write(text)
        counter += 1


def lines(number):
    with open(f"transcripts/avatar{number}") as f:
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
        data3.append(parenthesis_picker.sub("", thing))
    for thing in data3:
        data4.append(name_remover.sub("", thing) + "\n")
    return data4

def masterMaker():
    with open(f"master-avatar", "w") as f:
        for x in range(0, 131):
            try:
                f.writelines(lines(x))
            except Exception as e:
                print (e)

def nouns():
    removedNouns = []
    noun_dict = set()
    with open(f"master-avatar") as f:
        data = f.readlines()
    for lines in data:
        # function to test if something is a propernoun
        is_noun = lambda pos: pos[:3] == 'NNP'
        # do the nlp stuff
        tokenized = nltk.word_tokenize(lines)
        nouns = [word for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]
        if len(nouns) > 0:
            for noun in nouns:
                noun_dict.add(noun)
                removedNouns.append(lines.replace(noun,"dogge"))
                break
    #with open(f"finishedSentences", "w") as f:
    #    f.writelines(removedNouns)
    with open(f"finishedNouns", "w") as f:
        for nouns in noun_dict:
            f.write(nouns + "\n")
nouns()
#hhh
