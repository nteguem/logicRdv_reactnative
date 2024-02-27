import React from 'react'
import ContainerScreen from '../../components/wrappers/ContainerScreen';
import motifdata from '../data/Motifdata';
import Motif from '../../components/Motif/Motif';

const Motifs = () => {
    const data =motifdata
  return (
    <ContainerScreen>
       {
        data.map((item, index) => (
            <Motif
                key={index}
                labelplace={item.labelplace}
                color={item.color}
                description={item.description}
            />
        ))
       }
    </ContainerScreen>
  )
}

export default Motifs;