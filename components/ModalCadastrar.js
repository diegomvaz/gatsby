import * as React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalCloseButton,
    Button,
    FormControl,
    Input,
    FormLabel,
    FormErrorMessage,
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb
}
    from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'

export const ModalCadastrar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [raca, setRaca] = useState('')
    const [expec, setExpec] = useState([8, 16])
    const [temperamento, setTemperamento] = useState('')
    const [cores, setCores] = useState('')

    const handleRacaChange = (e) => setRaca(e.target.value)
    const handleTemperamentoChange = (e) => setTemperamento(e.target.value)
    const handleCoresChange = (e) => setCores(e.target.value)
    const ErroRaca = raca === ''
    const ErroTemperamento = temperamento === ''
    const ErroCores = cores === ''

    return (
        <>
            <Button onClick={onOpen} margin={5}>Nova Raça</Button>
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar Nova Raça</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isInvalid={ErroRaca}>
                            <FormLabel>Raça</FormLabel>
                            <Input type='text' value={raca} onChange={handleRacaChange} />
                            {ErroRaca &&
                                <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl>
                            <FormLabel marginTop={5}>Expectativa de Vida ({expec.join(' a ')} anos)</FormLabel>
                            <RangeSlider min={8} max={16} defaultValue={[8, 16]} onChangeEnd={(val) => setExpec(val)}>
                                <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                </RangeSliderTrack>
                                <RangeSliderThumb index={0} />
                                <RangeSliderThumb index={1} />
                            </RangeSlider>
                        </FormControl>
                        <FormControl isInvalid={ErroTemperamento}>
                            <FormLabel marginTop={5}>Temperamento</FormLabel>
                            <Input type='text' value={temperamento} onChange={handleTemperamentoChange} />
                            {ErroTemperamento &&
                                <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
                            }
                        </FormControl>
                        <FormControl isInvalid={ErroCores}>
                            <FormLabel marginTop={5}>Cores</FormLabel>
                            <Input type='text' value={cores} onChange={handleCoresChange} />
                            {ErroCores &&
                                <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
                            }
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button variant='ghost'>Salvar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}