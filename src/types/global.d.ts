export {}

declare global {
    interface IUser {
        image: string
        username: string
    }

    interface IComment {
        id: number
        content: string
        createdAt: string
        score: number
        user: {
            image: string
            username: string
        }
        replies?: IReply[]
    }

    interface IReply extends IComment {
        replyingTo: string
    }

    interface IStyles {
        [key: string]: string
    }

    interface INestedStyles {
        [key: string]: {
            [key: string]: string
        }
    }
}
