import datetime

from allbaro import Allbaro




# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(datetime.datetime.now())
    ab = Allbaro()
    ab.authenticate('cienergy3', '!ci69071001')
    # ab.get_login_info()
    start_date = datetime.date(2023, 5, 20)
    end_date = datetime.date(2023, 5, 28)
    ab.handover_process_list(start_date, end_date)

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
