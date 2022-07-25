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

export default function WinAlert({ name, image }) {
    const { setWinAlert } = useContext(GlobalContext)
    const { isOpen, onClose, onOpen } = useDisclosure()
    const ref = React.useRef()
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    useOutsideClick({
        ref: ref,
        handler: () => setWinAlert(false),
    })

    return (
        <>
            <Modal isOpen={onOpen} autoFocus isCentered={true} size={'4xl'} ref={ref}>
                <ModalOverlay />
                <ModalContent alignItems={'center'} fontFamily={'Poppins'} justifyContent={'center'}>
                    <ModalHeader fontSize={'48px'} fontWeight={700} paddingTop={'40px'} paddingBottom={'40px'} color={'green.400'}>{name} venceu !</ModalHeader>
                </ModalContent>
            </Modal>
        </>
    )
}