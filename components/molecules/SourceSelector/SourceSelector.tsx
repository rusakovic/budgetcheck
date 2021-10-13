import ContainerCenter from '@components/atoms/Containers/ContainerCenter';
import DefaultText from '@components/atoms/Text/DefaultText/DefaultText';
import React, {FC} from 'react';
import {View} from 'react-native';
import {SourceTypes} from 'screens/TransactionList/constants';
import {Picker} from '@react-native-picker/picker';
import {SourceSelectorStyle} from './styles';

interface SourceSelectorProps {
  selectedSource: SourceTypes;
  setSelectedSource: React.Dispatch<React.SetStateAction<SourceTypes>>;
}

const SourceSelector: FC<SourceSelectorProps> = ({
  selectedSource,
  setSelectedSource,
}) => {
  return (
    <ContainerCenter flexDirectionRow isFullWidth alignItemsCenter>
      <DefaultText isTextAlignCenter s style={SourceSelectorStyle.sourceText}>
        select source:
      </DefaultText>
      <View style={SourceSelectorStyle.pickerWrapper}>
        <Picker
          selectedValue={selectedSource}
          onValueChange={itemValue => setSelectedSource(itemValue)}
          itemStyle={SourceSelectorStyle.pickerItem}>
          <Picker.Item label={SourceTypes.small} value={SourceTypes.small} />
          <Picker.Item label={SourceTypes.medium} value={SourceTypes.medium} />
          <Picker.Item label={SourceTypes.large} value={SourceTypes.large} />
        </Picker>
      </View>
    </ContainerCenter>
  );
};

export default SourceSelector;
