// src/data/links.js

import { CiCreditCard1 } from 'react-icons/ci'
import { FaUserFriends } from 'react-icons/fa'
import { FaRegCircleQuestion } from 'react-icons/fa6'
import { FcStatistics } from 'react-icons/fc'
import { MdQuestionAnswer } from 'react-icons/md'
import { TiHomeOutline } from 'react-icons/ti'

export const navLinks = [
	{
		path: '/',
		label: 'Bosh sahifa',
		icon: TiHomeOutline,
	},
	{
		path: '/questions',
		label: 'Testlar',
		icon: FaRegCircleQuestion,
	},
	{
		path: '/statistics',
		label: 'Statistika',
		icon: FcStatistics,
	},
	{
		path: '/requirements',
		label: 'Talablar',
		icon: MdQuestionAnswer,
	},
]

export const secondaryLinks = [
	{
		path: '/coders',
		label: 'Dasturchilar',
		icon: FaUserFriends,
	},
	{
		path: '/forUs',
		label: 'Biz uchun',
		icon: CiCreditCard1,
	},
]
