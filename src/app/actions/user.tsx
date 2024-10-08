/**
 * * API User
 */

'use server'

import prisma from '@/lib/db'
import CustomResponse from '@/lib/res'
import makeObject from './makeobject'

/**
 * TODO Username Unique Error에 대한 처리 필요
 */
// 사용자 생성
export async function createUser(email: string, username: string) {
  try {
    await prisma.user.create({
      data: {
        email,
        username,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

// 사용자 정보 로드
export async function getUser(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { id },
    })
    return makeObject(new CustomResponse('200', 'Success', user))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

export async function getUserbyEmail(email: string | null | undefined) {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    })
    return makeObject(new CustomResponse('200', 'Success', user))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 확인 해야됨
 */
// 사용자 정보 업데이트
export async function updateUser(id: string, username: string) {
  try {
    await prisma.user.update({
      where: { id },
      data: {
        username,
      },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}

/**
 * TODO 본인 확인 해야됨
 */
// 사용자 제거
export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    })
    return makeObject(new CustomResponse('200', 'Success'))
  } catch (e) {
    return makeObject(new CustomResponse(e.code, e.message))
  }
}
