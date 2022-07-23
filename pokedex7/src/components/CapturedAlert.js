import React, { useContext } from 'react'
import styled from 'styled-components';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    useOutsideClick
} from '@chakra-ui/react'
import { GlobalContext } from './global/GlobalContext';

export default function CapturedAlert({ success }) {
    const { setSuccess } = useContext(GlobalContext)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const ref = React.useRef()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    useOutsideClick({
        ref: ref,
        handler: () => setSuccess(false),
    })

    return (
        <>
            <Modal isOpen={onOpen} autoFocus isCentered={true} size={'sm'} ref={ref}>
                <ModalOverlay/>
                <ModalContent alignItems={'center'} fontFamily={'Poppins'} justifyContent={'center'}>
                    <ModalHeader fontSize={'48px'} fontWeight={700} paddingTop={'40px'} paddingBottom={'0px'}>Gotcha!</ModalHeader>
                    <ModalBody fontSize={'16px'} paddingBottom={'40px'} paddingTop={'0px'}>
                        O Pokémon foi adicionado a sua Pokédex
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
