import json


def deserialize_nouns():
    with open("..\\finishedNouns") as f:
        data = f.readlines()

    all_nouns = []
    
    for line in data:
        if line.strip() == "":
            continue
        else:
            all_nouns.append(line.strip())

    # print(all_nouns)

    return(all_nouns)


def deserialize_sentences():
    with open("..\\finishedSentences", errors='ignore') as f:
        data = f.readlines()

    all_sentences = []
    
    for line in data:
        if line.strip() == "":
            continue
        else:
            all_sentences.append(line.strip())

    # print(all_sentences)

    return(all_sentences)

def final_function():
    deez_nouns = deserialize_nouns()
    deez_sentences = deserialize_sentences()

    dictionary_all = {
        "nouns" : deez_nouns,
        "sentences" : deez_sentences
    }

    final_form = open("final_form", "w")
    json.dump(dictionary_all, final_form)
    final_form.close()

final_function()