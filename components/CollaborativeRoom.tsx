'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import Header from './Header'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Editor } from './editor/Editor'
import Loader from './Loader'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id='my-id'>
      <ClientSideSuspense fallback={<Loader />}>
        <div className='collaborative-room'>
        <Header>
          <div className='flex w-fit items-center justify-center gap-2'>
            <p className='document-title'>This is a fake document title</p>
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Header>
        <Editor/>
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  )
}

export default CollaborativeRoom