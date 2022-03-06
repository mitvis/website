import csv
import string
import numpy as np
import pandas as pd
from scipy import stats
import scikit_posthocs as sp

def getDF(group):
    file_name = ('%s_rankings_numeric.csv' % group)
    Level = {}
    for level in range(1,6):
        level_name = 'level '+str(level)
        Level[level_name] = {}
        for rank in range (1,6):
            rank_name = 'rank '+str(rank)
            Level[level_name][rank_name] = 0

    with open(file_name) as csvfile:
        reader = csv.DictReader(csvfile)
        question_row = next(reader)
        num_participants = 0
        All_Ranks = {}
        for rank in range(1,6):
            All_Ranks[str(rank)] = []
        
        # Record # responses per ranking, ignore Example Task Q3.2
        for row in reader:
            num_participants += 1
            ranks = {}
            for key, val in row.items():
                if (('_' in key) and (val) and ('Q3.2' not in key)):
                    qid = str(key.split('_')[0])
                    level = str(key.split('_')[1])
                    rank = str(val)
                    Level['level '+level]['rank '+rank] += 1
                    if qid not in ranks:
                        ranks[qid] = []
                    ranks[qid].append((int(level), int(rank)))
                    All_Ranks[level].append(int(rank))
            
        print('Total number of participants:', num_participants)
        if group == 'blind':
            num_resp_per_vis = num_participants
        if group == 'sighted':
            num_resp_per_vis = num_participants * 5 / 15
        print('Number of responses per visualization:', num_resp_per_vis)

        df = pd.DataFrame.from_dict(Level)
        df = df.drop('rank 1', axis=0)
        df = df.drop('level 5', axis=1)
        # Transpose dataframe axes
        df = df.T
        df = df.reindex(index=df.index[::-1])
        return df, All_Ranks

def thresh(df):
    vals = df.values.flatten()
    mean = vals.mean()
    stdev = vals.std()
    # Calculate heatmap threshold level
    threshold = int(mean + 0.5*stdev)
    print('Calculated heatmap threshold:', threshold)
    return

def mean(l):
    return sum(l) / len(l)

def rank_means(l1, l2, l3, l4):
    print('level1 mean', mean(l1))
    print('level2 mean', mean(l2))
    print('level3 mean', mean(l3))
    print('level4 mean', mean(l4))
    return
    
def nemenyi_comparison(mat):
    print('l1-l2 pvalue=',mat[0][1])
    print('l1-l3 pvalue=',mat[0][2])
    print('l1-l4 pvalue=',mat[0][3])
    print('l2-l3 pvalue=',mat[1][2])
    print('l2-l4 pvalue=',mat[1][3])
    print('l3-l4 pvalue=',mat[2][3])
    return

def calculate_stats(group):
    print('=======================================================================================') 
    print(group.capitalize(), 'Reader Group')
    df, all_ranks = getDF(group)
    thresh(df)
    level1 = all_ranks['1']
    level2 = all_ranks['2']
    level3 = all_ranks['3']
    level4 = all_ranks['4']
    # rank_means(level1, level2, level3, level4)
    friedman = stats.friedmanchisquare(level1, level2, level3, level4)
    print(friedman)
    x = np.array([level1, level2, level3, level4])
    x = np.transpose(x)
    nemenyi = sp.posthoc_nemenyi_friedman(x)
    nemenyi_comparison(nemenyi)
    print('=======================================================================================') 

calculate_stats('blind')
calculate_stats('sighted')