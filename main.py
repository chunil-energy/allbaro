import calendar
import csv
import datetime

from allbaro import Allbaro




# Press the green button in the gutter to run the script.
if __name__ == '__main__':

    print(datetime.datetime.now())
    ab = Allbaro()
    ab.authenticate('cienergy3', '!ci69071001')
    # ab.get_login_info()
    start_date = datetime.date(2023, 5, 1)
    end_date = datetime.date(2023, 5, 30)
    result_list = ab.handover_process_list(start_date, end_date)
    with open('참고자료/result_list.csv', 'w') as file:
        wr = csv.DictWriter(file, fieldnames=result_list[0].keys())
        wr.writeheader()
        wr.writerows(result_list)
