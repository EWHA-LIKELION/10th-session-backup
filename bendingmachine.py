# 파이썬 자판기
def bandingmachine():
    budget = int(input('금액을 넣어주세요: '))

    while True:
        menu = {'콜라' : 500, '커피' : 400, '사이다' : 300, '율무차' : 200}
        goods = list(menu.keys())
        price = list(menu.values())

        print('[이화네 음료수]')
        print('현재 금액: ', budget, '원')
        
        for i in range(len(goods)):
            print(i+1, ". ", goods[i], " - ", price[i], "원")

        choice = int(input('음료를 선택해주세요: ')) - 1
        
        exchange = budget - price[choice]

        if exchange < 0:
            print('금액이 부족합니다.')
            break
        elif exchange == 0:
            print('잔액은 ', exchange, '원입니다. 이용해주셔서 감사합니다.')
            break
        else:
            print('잔액은 ', exchange, '원입니다.')
            ask = input('추가로 구매하시겠습니까?(Y/N): ')

            if ask == 'Y':
                budget = exchange
                continue
            else:
                break

bandingmachine()