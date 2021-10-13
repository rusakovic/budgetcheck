import React, {FC} from 'react';
import {Text, View} from 'react-native';
import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from '@constants/styled';

interface UserTransactionProps {}

const UserTransaction: FC<UserTransactionProps> = () => {
  return (
    <View style={{flex: 1, marginHorizontal: wp(4)}}>
      <View
        style={{
          height: hp(10),
          width: '100%',

          borderRadius: 10,
          elevation: 5,
          shadowOffset: {
            height: 1,
            width: 5,
          },
          shadowColor: '#000',
          shadowOpacity: 0.1,
          backgroundColor: styled.colors.white.white,
          shadowRadius: 5,
        }}>
        <View style={{height: '100%'}}>
          {/* UUID  */}
          <ContainerCenter
            alignItemsCenter
            style={{
              borderBottomColor: styled.colors.grey5opacity,
              borderBottomWidth: 1,
              height: '25%',
            }}>
            <DefaultText xs>sdfsdf-sdf-sdf-sdf-sdf-sdf</DefaultText>
          </ContainerCenter>

          {/* BALANCE  */}
          <ContainerCenter
            alignItemsCenter
            isVerticalCenter
            flexDirectionRow
            isContainer
            style={{
              borderBottomColor: styled.colors.grey5opacity,
              borderBottomWidth: 1,
              height: '50%',
              justifyContent: 'space-between',
            }}>
            {/* EUR */}
            <ContainerCenter flexDirectionRow alignItemsCenter>
              <DefaultText xs style={{color: '#000000'}}>
                🇪🇺
              </DefaultText>

              <DefaultText xs style={{marginLeft: '1%'}}>
                123.45
              </DefaultText>
            </ContainerCenter>

            {/* GBP */}
            <ContainerCenter flexDirectionRow alignItemsCenter>
              <DefaultText xs style={{color: '#000000'}}>
                🇬🇧
              </DefaultText>

              <DefaultText xs style={{marginLeft: '1%'}}>
                -123.45
              </DefaultText>
            </ContainerCenter>

            {/* USD */}
            <ContainerCenter flexDirectionRow alignItemsCenter>
              <DefaultText xs style={{color: '#000000'}}>
                🇺🇸
              </DefaultText>

              <DefaultText xs style={{marginLeft: '1%'}}>
                123.45
              </DefaultText>
            </ContainerCenter>
          </ContainerCenter>

          {/* LAST VISIT DATE  */}
          <ContainerCenter
            isContainer
            flexDirectionRow
            style={{
              height: '25%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <DefaultText xxs2>25-02-2021</DefaultText>
          </ContainerCenter>
        </View>
      </View>
    </View>
  );
};

export default UserTransaction;
