z# ENSF 592 Spring 2022
# Quiz 2 written question
# Total Marks available 16
 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#  stage 1: 1 Mark
#  load both xlsx files
#  total_cell_phones_by_country.xlsx and 
#  UN Codes.xlsx

total_phones = pd.read_excel('total_cell_phones_by_country.xlsx')

un_codes = pd.read_excel('UN Codes.xlsx')

#  stage 2: 1 Mark
#  merge the two dataframes using country name making sure the data from the un codes file occupies
#  the first few columns,note that the country column name in both files is slightly different and
#  you have to drop the one from the stats dataframe after merging

data = pd.merge(un_codes, total_phones, left_on = 'Country', right_on = 'country')
datas2 = data.drop('country', 1)

#  stage 3: 1 Mark
#  group the data by 'UN Region' and create a copy of the data without including Africa use 
#  the filter function with a lambda expression to achieve the task, then print the filtered data

data1 = data.copy()
data2 = data1.groupby(['UN Region'])
data2 = data2.filter(lambda dataframe:  np.any(dataframe['UN Region'] != 'Africa'))

#  stage 4: 1 Mark
#  Combine masking with pandas str.match() for regular expression to make a copy of data with
#  UN Region being Africa, then print them

data3 = data.copy()
print(data3[data3['UN Region'].str.match('Africa')])

#  stage 5: 1 Mark
#  create a pivot table of the merged data based on all years data using 'UN Region' as the index
#  and showing the sum of each series instead of mean

pivot_table = pd.pivot_table(data, index = ['UN Region'], aggfunc=np.sum)


#  stage 6: 2 Marks
#  change the index of your original merged data to be hierarchical based on levels 
#  ['UN Region' , 'UN Sub-Region' , 'Country'], make sure to sort the dataframe afterwords
#  group your updated dataframe by 'UN Region' and compute the sum of the groups
#  
#  compare the dataframe from the pivot table (stage 5) and the one from this step (stage 6)
#  showing they are identical using allclose function 

data = data.set_index(['UN Region' , 'UN Sub-Region' , 'Country']).sort_index()

data = data.groupby(['UN Region']).sum()

print(np.allclose(pivot_table, data))

#  stage 7: 2 Marks -0.5 for each wrong or missing subtask
#  create a figure named 'Total users per region' 
#  plot your data from stage 6 (x-axis --> years , y-axis --> sums)
#  set xlable to 'Year'
#  set ylable to 'Total number of users'
#  show the Legend (make sure not to hardcode the list of names, instead use the index values)
#  set the title to 'Total users per region'  .... note that this is different from the figure name set earlier
#  turn grid on

fig = plt.figure("Total users per region")

plt.title("Total users per region")
plt.xlabel("Years")
plt.ylabel("Sums")

plt.plot(data.T)
plt.grid()
plt.legend(data.T)
plt.show()


#  stage 8: 2 Marks -0.5 for each wrong or missing subtask
#  create a figure named 'Total global users' 
#  plot the total number of users per year .... this will be only one series (x-axis --> years , y-axis --> total)
#  set xlable to 'Year'
#  set ylable to 'Total number of users'
#  set the title to 'Total global users'  .... note that this is different from the figure name set earlier
#  turn grid on

data_new = data.sum()

fig1 = plt.figure("Total global users")

plt.title("Total global users")
plt.xlabel("Years")
plt.ylabel("Total number of users")

plt.plot(data_new)
plt.grid()
plt.show





#  stage 9: 2 Marks
#  show the plots and save them
# fig == plt.show()
# fig1 == plt.show()


fig.savefig('fig.png')
fig1.savefig('fig1.png')



#  stage 10: 3 Marks
#  load the remaining excel file
#  num_cell_phones_per_100_people.xlsx
#  merge it with UN codes
#  store your merged dataframe with indeces from stage 2 in the first sheet (named 'By Country') of an excel file called:
#         Cellphone Stats.xlsx
#  and store the dataframe you just created without indeces in stage 10 as the second sheet (named 'Per 100') in the same file
#  note: to be able towrite multiple sheets in an excel file you will need to use and excelwriter object
#        look them up in pandas documenation, or check the example on the to_excel, or google them

num_cell = pd.read_excel('num_cell_phones_per_100_people.xlsx')
final = pd.merge(un_codes, num_cell, left_on = 'Country', right_on = 'country')
final = final.drop('country', 1)

with pd.ExcelWriter('Cellphone Stats.xlsx') as writer:
    datas2.to_excel(writer, sheet_name = 'By Country')
    final.to_excel(writer, sheet_name = 'Per 100')








